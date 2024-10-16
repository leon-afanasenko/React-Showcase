import React from "react";

function SignInButton({ platform }) {
  return (
    <button className={`sign-in-button ${platform}`}>
      <img src={`/img/${platform}.png`} alt={`${platform} logo`} />
    </button>
  );
}

export default SignInButton;
