import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    perPage: 12,
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=33824136-a1de31ce3e31340e081d1e63a&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Sorry, nothing found on your request`)
          );
        })
        .then(data => {
          if (data.hits.length === 0) {
            Notiflix.Notify.failure(' Sorry, nothing found on your request');
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showModal: true,
          }));
          this.setState(({ isLoading }) => ({
            isLoading: true,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSearchSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, showModal } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '18px',
          paddingBottom: '25px',
        }}
      >
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && showModal && (
          <Button onBtnClick={this.handleLoadMore} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
