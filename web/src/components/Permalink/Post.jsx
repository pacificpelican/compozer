import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const shareThis = (stuff) => {
  console.log(stuff)
  console.log(stuff.url)
  const resultPara = document.querySelector('.result')
  //  const rootUrl = window.location.origin
  let shareData = {
    title: stuff.title,
    text: stuff.body,
    url: stuff.url,
  }
  console.log('ok ' + stuff.body)
  try {
    navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch (err) {
    resultPara.textContent = `Error: ${err}`
  }
}

const Post = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Post {post.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Title</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(post.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <main id="postContent">
        <p>{post.body}</p>
      </main>
      <nav className="rw-button-group">
        <Link
          onClick={() =>
            shareThis({
              url: window.location.origin + '/permalinks/' + post.id,
              ...post,
            })
          }
          className="rw-button rw-button-green"
        >
          share
        </Link>
        <Link
          to={routes.editPost({ id: post.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(post.id)}
        >
          Delete
        </button>
      </nav>
      <aside className="result"></aside>
    </>
  )
}

export default Post
