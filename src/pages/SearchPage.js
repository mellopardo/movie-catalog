import React from 'react';
import { withRouter } from 'react-router-dom';
import Page from './Page';
import Card from '../components/card/Card';

const SearchPage = ({ location, history }) => {
    const { state: { results, query } } = location;
    const goBack = () => history.goBack();

    return (
        <Page showSearch={true} onSearchClose={goBack}>
            <div className='search-page-grid'>
                <h2>Results for: {query}</h2>
                <div className="grid-results">
                    {results.map(item => (
                        <Card type={item.media_type} item={item} />
                    ))}
                </div>
            </div>
        </Page>
    );
}

export default withRouter(SearchPage);