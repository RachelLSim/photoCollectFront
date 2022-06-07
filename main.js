

const body = document.querySelector('body')
const entryBtn = document.getElementById('entry-btn')


const getSite = () => axios.get('https://photo-collect.herokuapp.com/').then(testFunction).catch(err => console.error(err))

const testFunction = () => console.log('test reached')

// console.log(response.data)
// const greeting = document.createElement('h1')
// greeting.innerHTML= `${response.data}`
// body.append(greeting)
// console.log(greeting)


const onClickHandler = () => {
    console.log('button clicked')
    getSite()
}

entryBtn.addEventListener('click', onClickHandler)