console.log("This is CV Screener.");

//Data is an array of objects which contains information about the candidates
const data = [
    {
        name: "Aanuj Kumar",
        age: 24,
        city: "Delhi",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: "Manoj Desai",
        age: 27,
        city: "Bihar",
        language: "Java",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/79.jpg"
    },

    {
        name: "Sonu Sharma",
        age: 25,
        city: "Bangalore",
        language: "JavaScript",
        framework: "Bootstrap",
        image: "https://randomuser.me/api/portraits/men/81.jpg"
    },

    {
        name: "Mansi Joshi",
        age: 22,
        city: "Mumbai",
        language: "C++",
        framework: "Tailwind",
        image: "https://randomuser.me/api/portraits/women/75.jpg"
    },

    {
        name: "Rishita Pandey",
        age: 25,
        city: "Pune",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/56.jpg"
    }
]

//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCV();
//Button Listener for next
let next = document.getElementById("next");
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name :${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily work with ${currentCandidate.language}</li> 
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>  
  </ul>`;
    }
    else{
        location.reload();
    }
}