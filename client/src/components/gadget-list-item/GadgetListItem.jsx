/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import gadgetPropType from '../../proptypes/gadget';
import './styles.css';

const GadgetListItem = ({
  gadget, onClickDetails, addToCart, signalAddedGadget,
}) => (
  <div data-testid="gadget-list-item" className="gadget-list-item-container">
    <img
      aria-hidden
      className="gadget-list-item-image"
      src={gadget.image}
      alt={`${gadget.name}`}
      onClick={() => onClickDetails(gadget)}
      onKeyPress={() => {}}
    />
    <div>
      {gadget.name}
    </div>
    <div>
      <strong>{gadget.price}</strong>
    </div>
    <div className="gadget-list-item-details-add-to-cart">
      <Button onClick={() => onClickDetails(gadget)}>Details</Button>
      <Button
        onClick={() => {
          addToCart(gadget);
          signalAddedGadget(gadget);
        }}
      >
        Add to cart
      </Button>
    </div>
  </div>
);

GadgetListItem.propTypes = {
  gadget: gadgetPropType.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  signalAddedGadget: PropTypes.func.isRequired,
};

export default GadgetListItem;
