
async function disease(){
    try{
        let input=document.querySelector('#inp').value;

        let v = await fetch(`https://disease.sh/v3/covid-19/countries/${input}`);
        let a =await v.json();
        console.log(a);

        

        document.querySelector('#country').value=a.country;
        document.querySelector('#conti').value=a.continent;
        document.querySelector('#lat').value=a.countryInfo.lat;
        document.querySelector('#long').value=a.countryInfo.long;
        document.querySelector('#pop').value=a.population;
        document.querySelector('#cases').value=a.cases;
        document.querySelector('#death').value=a.deaths;
        document.querySelector('#tdeath').value=a.todayDeaths;
        document.querySelector('#reco').value=a.recovered;
        document.querySelector('#test').value=a.tests;
        document.querySelector('#cri').value=a.critical;
        document.querySelector('#treco').value=a.recoveredPerOneMillion;

    }catch{
        console.log('error');
    }

}disease()