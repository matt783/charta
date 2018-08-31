export const enum DebtKernelErrorCodes {
    DEBT_ISSUED,
    ORDER_INVALID_EXPIRED,
    ISSUANCE_CANCELLED,
    ORDER_INVALID_CANCELLED,
    ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
    ORDER_INVALID_INSUFFICIENT_PRINCIPAL,
    ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
    ORDER_INVALID_NON_CONSENSUAL,
    CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
}

export const enum RepaymentRouterErrorCodes {
    DEBT_AGREEMENT_NONEXISTENT,
    PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
    REPAYMENT_REJECTED_BY_TERMS_CONTRACT,
}

export const enum CreditorProxyErrorCodes {
    DEBT_OFFER_CANCELLED,
    DEBT_OFFER_ALREADY_FILLED,
    DEBT_OFFER_NON_CONSENSUAL,
    CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
}
