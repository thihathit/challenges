import React, { useState } from 'react';
import toast from 'react-hot-toast';

// Elements
import Loader from '../../../elements/Loader/Loader.jsx';
import Cross from '../../../elements/Cross/Cross.jsx';

// Helpers
import { formatNumber } from '../../../../helpers.js';

// Api
import { useDonations } from '../../../../hooks/api.js';

// Styles
import {
  Container,
  DonateButton,
  Img,
  ImgWrapper,
  Info,
  Name,
  InfoRight,
  InfoLeft,
  InfoPayments,
  InfoPaymentsName,
  StyledButton,
  InfoPaymentsForm,
  CheckboxWrapper,
  Checkboxes,
  InfoPaymentsMessage,
  CrossWrapper,
} from './CharityItem.styled.jsx';

const toastOptions = {};

const CharityItem = ({
  id,
  image,
  name,
  currency,
  payments = [],
  afterPaid = () => undefined,
}) => {
  const [state, setState] = useState({
    show_payments: false,
    required_message: false,
  });

  const { state: stateDonation, post } = useDonations();

  const showPayments = () => {
    setState((old) => ({
      ...old,
      show_payments: true,
    }));
  };

  const hidePayments = () => {
    setState((old) => ({
      ...old,
      show_payments: false,
    }));
  };

  const onPay = async (e) => {
    e.preventDefault();

    const Form = new FormData(e.target);
    const optionId = Form.get('option');

    if (!optionId) {
      setState((old) => ({
        ...old,
        required_message: true,
      }));
      return;
    }

    const payment = payments.find(({ id }) => id == optionId);

    // Submit to Api
    const donateAction = post({
      amount: payment.amount,
      charityId: id,
      currency: payment.currency,
      paymentId: payment.id,
    });

    // Throw notification
    await toast.promise(donateAction, {
      loading: 'Paying...',
      success: `Success! You've donated THB ${formatNumber(
        payment.amount
      )} to ${name}`,
      error: <b>Could not donate.</b>,
    });

    hidePayments();
    afterPaid();
  };

  return (
    <Container>
      <ImgWrapper>
        <Img src={`/images/${image}`} width={3} height={1} />
      </ImgWrapper>

      <Info>
        <InfoLeft>
          <Name>{name}</Name>
        </InfoLeft>

        <InfoRight>
          <DonateButton onClick={showPayments}>Donate</DonateButton>
        </InfoRight>
      </Info>

      <InfoPayments active={state.show_payments}>
        <Loader active={stateDonation.post.loading} />

        {!stateDonation.post.loading && (
          <InfoPaymentsForm onSubmit={onPay}>
            <InfoPaymentsName>
              {name} ({currency})
            </InfoPaymentsName>

            <CheckboxWrapper>
              {payments.map((payment) => (
                <Checkboxes key={payment.id}>
                  <input
                    type="radio"
                    name="option"
                    value={payment.id}
                    hidden
                    id={`payment-${id}-${payment.id}`}
                  />

                  <label htmlFor={`payment-${id}-${payment.id}`}>
                    {formatNumber(payment.amount)}
                  </label>
                </Checkboxes>
              ))}
            </CheckboxWrapper>

            {state.required_message && (
              <InfoPaymentsMessage>please choose a payment</InfoPaymentsMessage>
            )}

            <StyledButton>Pay</StyledButton>
          </InfoPaymentsForm>
        )}

        <CrossWrapper>
          <div onClick={hidePayments}>
            <Cross />
          </div>
        </CrossWrapper>
      </InfoPayments>
    </Container>
  );
};

export default CharityItem;
