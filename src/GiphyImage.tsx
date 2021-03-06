import * as React from 'react';

interface GiphyImageProps {
    name: string;
}

export default class GiphyImage extends React.Component<GiphyImageProps, any> {

    constructor(props: GiphyImageProps) {
        super(props);

        this.state = {
            giphyUrl: '',
            isLoading: false
        };
    }
    
    componentDidMount() {
        const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';
        this.setState({isLoading: true});

        fetch(giphyApi + this.props.name)
            .then(response => response.json())
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({giphyUrl: response.data[0].images.original.url});
                } else {
                    this.setState({giphyUrl: '//media0.giphy.com/media/Qd8Fwmm0PgTcc/giphy.gif'});
                }
                this.setState({isLoading: false});
            });
    }

    render() {
        const {giphyUrl, isLoading} = this.state;

        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        return(
            <img src={giphyUrl} alt={this.props.name} width="100px" />
        );
    }
}