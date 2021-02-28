import { useSelector, useDispatch } from 'react-redux';
const SearchHackerNews = () => {
    // redux hooks
    const query = useSelector(state => state.query);
    const hits = useSelector(state => state.hits);

    const dispatch = useDispatch()

    console.log(hits)
    // function to query HackerNews and dispatch response hits
    const queryHackerNews = (query) => {

        const apiPath = 'http://hn.algolia.com/api/v1/search?'

        fetch(apiPath + query).then(res =>
            res.json().then(data => {
                if (data.hits)
                    dispatch({ type: 'PUT_HITS', hits: data.hits })
            }))
    }
    // function to construct html list content from query hit data
    return <>
        <div className='search'>
            <h1>Search HackerNews</h1>
            <input type='text' value={query} onChange={event => dispatch({ type: 'PUT_QUERY', query: event.target.value })}></input>
            <button onClick={() => queryHackerNews(new URLSearchParams({query}).toString())}>Search</button>
        </div>
        <ul>{hits.map((hit, index) => <li key={index}>{createHitDisplay(hit)}</li>)}</ul>
    </>
}
    // function to construct hit JSX
    const createHitDisplay = (hit) => {
        return <div className='query-hit'>
            <h3><a href={hit.url || hit.story_url} target='_blank' rel="noreferrer"> {hit.title || hit.story_title}</a></h3>
             <div className='query-hit-header'>
                <span><b>Author: </b>{hit.author}</span>
                <span><b>Date: </b>{hit.created_at}</span>
                <br/>
            </div>
            <section>{hit.story_text}</section>
        </div>
    }
export default SearchHackerNews;