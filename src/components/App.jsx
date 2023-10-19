import { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchGallery } from './api'
import { Loader } from './Loader/Loader';



export class App extends Component {
  state = {
    gallery: [],
    loading: false,
    error: false,
    following: false,
    per_page: 12,
    page: 1,
    q: '',
  };

  //зміна фільтру
  handlerFind = (evt) => {
    evt.preventDefault();
    this.setState({
      page: 1,
      q: evt.target.find.value,
    });
  };

  // наступна сторінка
  nextPage = () => {
    this.setState(prevState =>
      ({ page: prevState.page + 1 }));
  };


  // якщо було змінено параметри запиту
  async componentDidUpdate(prevProps, prevState) {

    // запит нової галереї 
    if (this.state.q && (prevState.q !== this.state.q)) {
      try {
        this.setState({ loading: true, error: false });
        const response = await fetchGallery(1, this.state.q);
        this.setState({ gallery: response.hits });
        this.setState({
          following:
            response.totalHits <= this.state.per_page ? false : true
        })
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
      return;
    }

    // докачка нової сторінки по "Load more"
    if (this.state.q && (prevState.page !== this.state.page)) {
      try {
        this.setState({ loading: true, error: false });
        const response = await fetchGallery(this.state.page, this.state.q);
        this.setState(prevState => ({ gallery: [...prevState.gallery, ...response.hits], }));
        this.setState({
          following:
            response.totalHits <= this.state.page * this.state.per_page ? false : true
        })
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { error, following, loading } = this.state;
    return (
      <>
        <Searchbar onSelect={this.handlerFind} />
        <ImageGallery gallery={this.state.gallery} />
        {loading && <Loader />}
        {error && (<p>Error load gallery, please restart page...</p>)}
        {following && (<Button nextPage={this.nextPage} />)}
      </>
    );
  };
};
