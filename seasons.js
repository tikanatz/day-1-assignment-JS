var seasons = ['spring','summer',' fall']
seasons.push('winter') 

alert(seasons[3]) // winter

for(var i = 0; i<seasons.length; i++)
{
    console.log(seasons[i])
}

seasons.forEach(
    seasons => console.log("seasons are " + seasons)
)