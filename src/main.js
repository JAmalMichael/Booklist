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
            <td><a href="#" class="text-sm text-red-500"><i class="fa-solid fa-xmark"></i> </a></td>
            `;

            list.appendChild(row); 
           }

}


// displaying books
document.addEventListener("DOMContentLoaded", UI.displayAnime);


document.querySelector('#anime-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const main_act = document.querySelector('#main-act').value;


    // instantiating the anime
     const anime = new Anime(title, genre, main_act);

    UI.addAnimeToList(anime);
});
