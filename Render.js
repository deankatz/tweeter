
const Renderer = function () {
	
    const _generatePostTextHtml = function (post) {
        const postText = post.text

        let $postText = $(`<h3 class="post-text">${postText}</h3>`)

        return $postText
    }

    const _generateCommentText = function (comment) {
        const commentText = comment.text
        const $commentText = $(`<p data-id="${comment.id}"><i class="far fa-trash-alt delete-comment"></i> &nbsp; ${commentText}</p>`)

        return $commentText
    }

    const _generateCommentDiv = function (post) {
        let $commentDiv = $(`<div class="comments"></div>`)
        for(let comment of post.comments) {
            $commentDiv.append(_generateCommentText(comment))
        }
        let $inputButtonDiv = $(`<div class="comment-input-button"></div>`)
        $inputButtonDiv.append(`<input type="text" placeholder="Got something to say?" class="comment-input">`)
        $inputButtonDiv.append(`<button>Comment</button>`)
        $commentDiv.append($inputButtonDiv)

        return $commentDiv
    }

    const _generatePostDiv = function (post) {
        let $postDiv = $(`<div class="post" data-id="${post.id}"></div>`)
        $postDiv.append(_generatePostTextHtml(post))
        $postDiv.append(_generateCommentDiv(post))
        $postDiv.append(`<div class="delete">Delete Post</div>`)
        

        return $postDiv
    }

    const renderPosts = function (posts) {
        $("#posts").empty()

        for (let post of posts) {
            $("#posts").append(_generatePostDiv(post))
        }

    }

    return {
        renderPosts
    }
}
