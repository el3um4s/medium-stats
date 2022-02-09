<script type="ts">
  import { slide } from "svelte/transition";
  export let story;

  $: id = story.post.id;
  $: backgroundImage = `url(https://miro.medium.com/max/160/${story.post.virtuals.previewImage.imageId})`;
</script>

<section>
  {#key id}
    <div class="content" transition:slide>
      <div class="info">
        <div class="title">{story.post.title}</div>
        <div class="subtitle">{story.post.virtuals.subtitle}</div>
        <div class="link">
          <a href="https://medium.com/story/{story.post.id}" target="_blank"
            >Link: medium.com/story/{story.post.id}</a
          >
        </div>
      </div>
      <div class="previewImage" style:background-image={backgroundImage} />
    </div>
  {/key}
</section>

<style lang="postcss">
  section {
    box-shadow: rgb(230 230 230) 0px 0px 0px 1px inset;
    height: 100%;
    width: 100%;
  }

  .content {
    padding: 0px;
    display: flex;
    flex: 0 0 auto;
  }

  .info {
    padding: 10px 12px;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    max-height: 40px;
    line-height: 20px;
    color: rgba(41, 41, 41, 1);
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .subtitle {
    display: block;
    margin-top: 8px;
    max-height: 40px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(117, 117, 117, 1);
    word-break: break-word;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .link {
    display: -webkit-box;
    word-wrap: break-word;
    word-break: break-word;
    max-height: 40px;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 400;
    color: rgba(117, 117, 117, 1);
    overflow: hidden;
    margin-top: 8px;

    line-height: 20px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .previewImage {
    width: 160px;
    max-width: 100%;
    height: 167px;
    display: block;
    background-position: 50% 50%;
    background-size: cover;
    background-origin: border-box;
    box-shadow: rgb(230 230 230) 0px 0px 0px 1px inset;
  }
</style>
