function Login({fetchSubscriptions}) {
  const appId = import.meta.env.VITE_TWITCH_CLIENT_ID;
  const redirectUri = "http://localhost:5173/";
  const scopes = "channel_subscriptions";
  const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scopes}`

  function handleLogin() {
    window.location.href = twitchAuthUrl;
  }

  return (
    <div className="login">
      <button className="login-button" onClick={handleLogin}>Login</button>
      <button onClick={fetchSubscriptions}>fetch subscriptions</button>
    </div>
  )
}

export default Login;
