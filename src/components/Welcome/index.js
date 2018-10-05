import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as countryActions from '../../actions/country';
import Title from '../Title';

import styles from './styles.scss';

class Welcome extends React.Component {

  componentDidMount() {
    this.props.listCountry();
  }

  render() {
    return (
      <div className={styles.container}>
        <Title />
        <ul className={styles.list}>
          {
            this.props.countries.map(country =>
              <li className={styles.item} key={country.id}>{country.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

Welcome.propTypes = {
  countries: PropTypes.array,
  listCountry: PropTypes.func
};

const mapStateToProps = state => ({
  countries: state.countryState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(countryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
