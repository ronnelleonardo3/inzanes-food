"use client";

import { useState } from "react";

export function useCheckout() {
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Customer Modal

  const openCustomerModal = () => {
    setCustomerModalOpen(true);
  };

  const closeCustomerModal = () => {
    setCustomerModalOpen(false);
  };

  // Confirmation Modal

  const openConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  // Payment Modal

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  // Success Modal

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  // Flow Helpers

  const goToCustomer = () => {
    closeConfirmationModal();
    closePaymentModal();
    closeSuccessModal();
    openCustomerModal();
  };

  const goToConfirmation = () => {
    closeCustomerModal();
    closePaymentModal();
    closeSuccessModal();
    openConfirmationModal();
  };

  const goToPayment = () => {
    closeCustomerModal();
    closeConfirmationModal();
    closeSuccessModal();
    openPaymentModal();
  };

  const goToSuccess = () => {
    closeCustomerModal();
    closeConfirmationModal();
    closePaymentModal();
    openSuccessModal();
  };

  const resetCheckout = () => {
    closeCustomerModal();
    closeConfirmationModal();
    closePaymentModal();
    closeSuccessModal();
  };

  return {
    customerModalOpen,
    confirmationModalOpen,
    paymentModalOpen,
    successModalOpen,

    openCustomerModal,
    closeCustomerModal,

    openConfirmationModal,
    closeConfirmationModal,

    openPaymentModal,
    closePaymentModal,

    openSuccessModal,
    closeSuccessModal,

    goToCustomer,
    goToConfirmation,
    goToPayment,
    goToSuccess,

    resetCheckout,
  };
}