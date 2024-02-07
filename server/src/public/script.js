const button = document.getElementById("button");
const today = document.getElementById("today");
const week = document.getElementById("week");
const allTime = document.getElementById("allTime");


async function fetching() { 
  let response
}





button.onclick = async () => {
  const fetching = await(await fetch("http://217.25.94.100:5000/analitic/allClients")).json();

  const { year, month, day, week } = getDate()
  const todayJson = JSON.stringify({ year, month, day})


  let todayCount = 0

  let allTimeCount = 0


  fetching.forEach(i => {
    const year = i.date.year
    const month = i.date.month
    const day = i.date.day
    const itemJson = JSON.stringify({ year, month, day })
    if (todayJson === itemJson) {
      todayCount += 1
    }
    allTimeCount += 1
  })
  

  

  today.textContent = todayCount
  allTime.textContent = allTimeCount
};



function getDate() {
  const date = new Date()

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const week = date.getDate()
  
  return { year,month, day, week}
}