const paragraph=document.getElementById("fact");

const tweet=()=>
{
    const tweetMsg=paragraph.innerHTML;
    const tweetThisTxt=`https://twitter.com/intent/tweet/?text=${tweetMsg}`;
    window.open(tweetThisTxt);
}

const getCatFacts=()=>
{
    fetch('https://catfact.ninja/fact').then(function (response)
    {
        return response.json();
    })
    .then(function (obj)
    {
        paragraph.innerHTML=obj.fact;
    })
}