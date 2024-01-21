<script lang="ts">
  import OSSLogo from './assets/Mercantec-OSS-W.png'
  import Footer from './lib/Footer.svelte'
</script>

<main>
  <div class="header">
    <a href="https://github.com/Mercantec-OSS/FindEnElev" target="_blank" rel="noreferrer">
      <img src={OSSLogo} class="logo" alt="Mercantec-OSS Logo" />
    </a>
    <h1> Velkommen til Formue Status</h1>
  </div>

</main>
<Footer />

<style>
  .logo {
    height: 12em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #64ff76aa);
  }

 main{
  min-height: 400px;
  margin-bottom: 100px;
  clear: both;
 }
 .header{
  display: flex;
  align-items: center;
 }

</style>
