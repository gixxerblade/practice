// Add agency script right now. What do I do to make it autocomplete for city and state? 
handleLocationChange = async ({ target }) => {
    const { value } = target;

    this.setState({ [ target.name ] : target.value }, async () => {
        if ( target.value.length > 2 ) {
            await runLocationSearchDebounced(value)
            .then( result => {
                if ( result ) {
                    if ( result.status === 200 ) {
                        if ( result.data ) {
                            const { data } = result;
                            if ( data ) {
                                const { locations } = data;
                                if ( locations ) {
                                    this.setState({ location_suggestions: locations })
                                }
                            }
                        }
                    }
                }
            })
        }
        if ( target.value.length === 0 ) {
            this.setState({ location_suggestions: [] });
        }
    })
}
handleLocationClick = location => {
    const parts = location.split(',');
    //const address = parts[0];
    const city = parts[1].trim();
    const agencyState = parts[2].trim();
    Axios.get(`https://slfbnfj71d.execute-api.us-east-1.amazonaws.com/dev/location/zip/?input=${location}`).then( result => {
        if ( result ) {
            if ( result.status === 200 ) {
                if ( result.data ) {
                    const { data } = result;
                    if ( data ) {
                        if ( data.zip ) {
                            const { zip } = data;
                            this.setState({ city, agencyState, zip, location_suggestions: [] })
                        }
                    }
                }
            }
        }
    })
}

