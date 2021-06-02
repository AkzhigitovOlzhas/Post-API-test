function load_page() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Error. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response  
                response.json().then(function (data) {
                    let container = document.getElementById('container');
                    for (let i = 0; i < data.length; i++) {
                        let post = document.createElement('div');
                        post.classList.add('post');

                        let post_title = document.createElement('h2');
                        post_title.classList.add('post__title')

                        let post_text = document.createElement('div');
                        post_text.classList.add('post__text')

                        data[i].title = data[i].title[0].toUpperCase() + data[i].title.slice(1);
                        data[i].body = data[i].body[0].toUpperCase() + data[i].body.slice(1);
                        data[i].body = data[i].body.replace(/\n/g, '<br>');
                        post_title.innerHTML = data[i].title;
                        post_text.innerHTML = data[i].body;

                        post.append(post_title);
                        post.append(post_text);
                        container.append(post);
                    }
                });
            }
        ).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}