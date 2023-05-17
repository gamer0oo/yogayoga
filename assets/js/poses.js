const URL = "https://yoga-api-nzy4.onrender.com/v1/poses";
let poses = [];

async function obtPoses() {
    await fetch(URL)
        .then(res => res.json())
        .then(json => poses.push(json))

    for (let i = 0; i < 20; i++) {
        let div = document.createElement('div');
        div.classList.add('pose', 'col-sm-2', 'mt-5');
        let info = `<img src=${poses[0][i].url_svg}></img> 
                        <h3> ${poses[0][i].sanskrit_name}</h3>
                        <p><span>Beneficios</span><br> ${poses[0][i].pose_benefits}</p>`;
        div.innerHTML = info;
        $(".poses").append(div);
    }
}

obtPoses();

