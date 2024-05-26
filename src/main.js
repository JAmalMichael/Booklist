class Anime {
    constructor(title,genre, main_act) {
        this.title = title;
        this.genre = genre;
        this.main_act = main_act;
    }
}

class UI {
    static displayAnime() {
        const storedAnimes = [
            {
                title: 'Naruto',
                genre: 'Shinobi',
                main_act: 'Jiraiya'
            },
            {
                title: 'Attack on Titan',
                genre: 'Mystery and Adventure',
                main_act: 'Eren Jeager'
            }
        ];

        const animes = storedAnimes;

        animes.forEach((anime) => {
                UI.addAnimeToList(anime)
        });
    }

        static addAnimeToList(anime) {
            const list = document.querySelector('#anime-list');

            const row = document.createElement('tr');

            row.innerHTML= `
            <td class="text-sm border-b-black border border-r-0 border-l-0">${anime.title}</td>
            <td class="text-sm border-b-black border border-r-0 border-l-0">${anime.genre}</td>
            <td class="text-sm border-b-black border border-r-0 border-l-0">${anime.main_act}</td>
            <td><a href="#" class="text-sm text-red-500 delete font-bold"> X </a></td>
            `;

            list.appendChild(row); 
           }

           static clearFields() {
            document.querySelector('#title').value = '';
            document.querySelector('#genre').value = '';
            document.querySelector('#main-act').value = '';
           }

           static deleteAnime(el) {
            if( el.classList.contains('delete')) {
                el.parentElement.parentElement.remove();
            }
           }

          static showAlert(danger, className) {
            const div = document.createElement('div');
            div.className = `bg-red-500 w-4/5 p-1 text-white text-sm text-center mx-auto alert`;
            div.appendChild(document.createTextNode(danger));
            const container = document.querySelector('.section');
            const form = document.querySelector('#anime-form');
            container.insertBefore(div, form);

            setTimeout(()=> document.querySelector('.alert').remove(), 3000);
         } 

          static showAlert2(success, className) {
            const div = document.createElement('div');
            div.className = `bg-green-500 w-4/5 p-1 text-white text-sm text-center mx-auto alert`;
            div.appendChild(document.createTextNode(success));
            const container = document.querySelector('.section');
            const form = document.querySelector('#anime-form');
            container.insertBefore(div, form);

            setTimeout(()=> document.querySelector('.alert').remove(), 3000);
         } 

}


// displaying books
document.addEventListener("DOMContentLoaded", UI.displayAnime);


document.querySelector('#anime-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const main_act = document.querySelector('#main-act').value;


    if(title == '' || main_act === '' || genre === '' ) {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
           // instantiating the anime
     const anime = new Anime(title, genre, main_act);

     UI.addAnimeToList(anime);

     UI.showAlert2('Anime Added', 'success');
    
     UI.clearFields();
    }

 
});

document.querySelector('#anime-list').addEventListener('click', (e) => {
    UI.deleteAnime(e.target);


    UI.showAlert2('Anime Removed', 'success');
})