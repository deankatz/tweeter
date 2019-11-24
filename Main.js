const tweeter = Tweeter()
	const renderer = Renderer()
	
	renderer.renderPosts(tweeter.getPosts()) 
	
	$("#post").on("click", function () {
	
	
	    tweeter.addPost($("#input").val())
	    $("#input").val("")
	
	    renderer.renderPosts(tweeter.getPosts())
	})
	
	$("#posts").on("click", ".delete", function () {
	    const postID = $(this).closest(".post").data().id
	    tweeter.removePost(postID)
	
	    renderer.renderPosts(tweeter.getPosts())
	})
	
	$("#posts").on("click", "button", function () {
	    const postID = $(this).closest(".post").data().id
	    const text = $(this).closest(".comment-input-button").find(".comment-input").val()
	    tweeter.addComment(text, postID)
	    $(this).closest(".comment-input-button").find(".comment-input").val("")
	
	    renderer.renderPosts(tweeter.getPosts())
	})
	
	$("#posts").on("click", "i", function () {
	    const postID = $(this).closest(".post").data().id
	    const commentID = $(this).closest("p").data().id
	    tweeter.removeComment(postID, commentID)
	
	    renderer.renderPosts(tweeter.getPosts())
	})


    // const tweeter = Tweeter()
// const renderer = Renderer()

// renderer.renderPosts(tweeter.getPosts())




// // ------------------------------




// const addPost = function(){

//     const text=$("#input").val()
//     if (!text){return Tweeter.addPost(text)}
//     renderer()//?????

//     // $('#post').on('click', function () {
//     //     _posts.push({id:this, text:this})
//     //   })
      
// }

// $("addComment").click(function(){addComment(this)})//למה זה קשור, לאן זה הולך ?

// const removePost = (postElement)=> {Tweeter.removePost(postElement.id)}
// renderer()//?????





// const addComment=function(buttton){
//     post=$("#button").closest(".post")
//     text=$("#button").sibilings("input").val()

//     if (!text){return}
//     Tweeter.addComment(text, post.attr("id"))
//     renderer()//?????
// }

// const removeComment = function(postElement, commentElement){
//     Tweeter.removeComment(postElement.id,commentElement.id)
//     renderer()
// }
// renderer()
