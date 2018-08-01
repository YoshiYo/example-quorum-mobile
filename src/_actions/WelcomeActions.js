export function welcomeMessage() {
  return {
    type: 'WELCOME_ONBOARDING_MESSAGE',
  };
}

export function welcomeMessage2(text) {
  return {
    type: 'WELCOME_MESSAGE_FROM_HOMEPAGE',
    text,
  };
}
