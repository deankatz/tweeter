const Tweeter = function () {
	
	    const _posts = [
	        {
	            text: "First post!",
	            id: "p1",
	            comments: [
	                { id: "c1", text: "First comment on first post!" },
	                { id: "c2", text: "Second comment on first post!!" },
	                { id: "c3", text: "Third comment on first post!!!" }
	            ]
	        },
	        {
	            text: "Aw man, I wanted to be first",
	            id: "p2",
	            comments: [
	                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
	                { id: "c5", text: "Yeah, believe in yourself!" },
	                { id: "c6", text: "Haha second place what a joke." }
	            ]
	        }
	    ]
	
	
	    let _postIdCounter = 3
	    let _commentIdCounter = 7
	
	
	    const _findPostIndex = function (postID) {
	
	        for (let i in _posts) {
	            if (_posts[i].id === postID) {
	                return i
	            }
	        }
	
	    }
	
	    const _findCommentIndex = function (post, commentID) {
	        for (let i in post.comments) {
	            if (post.comments[i].id === commentID) {
	                return i
	            }
	        }
	    }
	
	    const _getNextPostID = function () { 
	
	        const idNumber = _postIdCounter
	        const nextID = "p" + idNumber
	        _postIdCounter++
	        return nextID
	
	    }
	
	    const _getNextCommentID = function () {
	        const idNumber = _commentIdCounter
	        const nextID = "c" + idNumber
	        _commentIdCounter++
	        return nextID
	    }
	
	    const getPosts = function () { 
	        return _posts
	    }
	
	    const addPost = function (text) {
	        const post = {}
	        post.text = text
	        const id = _getNextPostID()
	        post.id = id
	        post.comments = []
	
	        _posts.push(post)
	    }
	
	    const removePost = function (postID) {
	        const postIndex = _findPostIndex(postID)
	        _posts.splice(postIndex, 1)
	    }
	
	    const addComment = function (text, postID) {
	        const comment = {}
	        const id = _getNextCommentID()
	        comment.id = id
	        comment.text = text
	
	        _posts[_findPostIndex(postID)].comments.push(comment)
	    }
	
	    const removeComment = function (postID, commentID) {
	        const post = _posts[_findPostIndex(postID)]
	
	        const commentIndex = _findCommentIndex(post, commentID)
	
	        _posts[_findPostIndex(postID)].comments.splice(commentIndex, 1)
	    }
	
	    return {
	        getPosts,
	        addPost,
	        removePost,
	        addComment,
	        removeComment
	    }
	}

// const Tweeter=function(){

// let _postIdCounter =3
// let _commentIdCounter=4


// const _getNextPostID = function (){

//     const idNumber = _postIdCounter
//     const nextID = "p" + idNumber
//     _postIdCounter++
//     return nextID
// }

// const _findCommentIndex = function (post, commentID){

//     for (let i in post.comments){
//         if (post.comments[i].id === commentID){
//             return i
//         }
//     }
// }

// const _getNextCommentID = function (){
//     const idNumber = _commentIdCounter
//     const nextID = "c" + idNumber
//     _commentIdCounter++
//     return nextID
// }
    
// // const Tweeter = function () {
// const _posts = [//private, why ???
//         {
//             text: "First post!",
//             id: "p1",
//             comments: [
//                 { id: "c1", text: "First comment on first post!" },
//                 { id: "c2", text: "Second comment on first post!!" },
//                 { id: "c3", text: "Third comment on first post!!!" }
//             ]
//         },
//         {
//             text: "Aw man, I wanted to be first",
//             id: "p2",
//             comments: [
//                 { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//                 { id: "c5", text: "Yeah, believe in yourself!" },
//                 { id: "c6", text: "Haha second place what a joke." }
//             ]
//         }
//     ]


// const getPosts = function (){ 
//     return _posts
// }

// const addPost = function (text){ // has to be a better way of doing this !

//     const post = {}  
//     const id = _getNextPostID()
//     post.text = text   
//     post.id = id     
//     post.comments = []  
//     _posts.push(post)     
// }

// const addComment = function (text, postID){
    
//     const comment = {}
//     const id = _getNextCommentID()
//     comment.id = id
//     comment.text = text

//     _posts[_findPostIndex(postID)].comments.push(comment)
// }

// const removeComment = function (postID, commentID) {

//     const post = _posts[_findPostIndex(postID)]
//     const commentIndex = _findCommentIndex(post, commentID)

//     _posts[_findPostIndex(postID)].comments.splice(commentIndex, 1)
// }

// const removePost = function (postID) {
//     const postIndex = _findPostIndex(postID)
//     _posts.splice(postIndex, 1)
// }


// return {
//     getPosts,
//     addPost,
//     removePost,
//     addComment,
//     removeComment
// }
// }

// const removePost = function(postID){//הלחיצה על הכפתור צריכה לזהות את הפוסט הרלוונטי ולמחוק אותו, מניח לפי THIS
//     for (let postIndex in _posts){
//         if(_posts[postIndex].id==postID){
//             return _posts.splice(postIndex,1)
//     }
// }
// }

// }

// return {
//     getPosts:getPosts,
//     addPost:addPost,
//     removePost:removePost,
//     addComment:addComment,
//     removeComment:removeComment
// }


// return { ----------why not put it as a public return and then do methods ?!?!
// const getPosts = function(postID){  --------למה לא עבד ??????
//     _posts.push({
//         text:text,
//         id:id._generateNextPostID(),
//         comment:[]
//     }) 





// const getPosts = function(postID){//?????
//     _posts.push({
//         text:text,
//         id:id.generateNextPostID(),//????
//         comment:[]
//     })
// return (post) //no $, what is post ?



// const addComment = function(text){  //why html doesnt know this function ? is it because the getPosts ?
//     _posts.push({
//         text:text,
//         id:id._generateNextCommentID(),
//         comment:[]
//     })


// const removeComment = function (postID, commentID) {
//     const post = _posts[_findPostIndex(postID)]

//     const commentIndex = _findCommentIndex(post, commentID)

//     _posts[_findPostIndex(postID)].comments.splice(commentIndex, 1)
// }
