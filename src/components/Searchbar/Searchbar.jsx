import { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import Notiflix from 'notiflix';

import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      Notiflix.Notify.failure('Please enter the word');

      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormInput
          name="query"
          value={this.state.query}
          onChange={this.handleInput}
          type="text"
          autoComplete="on"
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit">
          <FiSearch />
        </SearchFormButton>
      </SearchForm>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
