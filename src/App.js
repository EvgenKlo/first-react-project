import React, {useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'ff'},
    {id: 2, title: 'bb', body: 'ee'},
    {id: 3, title: 'cc', body: 'dd'}
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search...'
      />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Sorting '}
          options={[
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'},
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList
          remove={removePost}
          posts={posts}
          title='Posts about JS'
        />
        :
        <h1 style={{textAlign: 'center'}}>
          Posts not found
        </h1>
      }
      
    </div>
  );
}

export default App;
