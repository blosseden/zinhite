<template>
  <div>
      <div class="darkmode">
        <div class="inner">
          <input type="radio" name="toggle" id="toggle-radio-light" checked /><label
            for="toggle-radio-light"
            class="tolight"
            ><i class="fas fa-sun tolight"></i
          ></label>
          <input type="radio" name="toggle" id="toggle-radio-dark" /><label
            for="toggle-radio-dark"
            class="todark"
            ><i class="fas fa-moon todark"></i
          ></label>
          <div class="darkmode-bg"></div>
        </div>
      </div>
    </div>

    <section>
      <h2 class="sr-only">섹션 제목</h2>
      <div class="section-slides">
        <div class="slides-container">
          <p class="on"><a href="#">슬라이드1</a></p>
          <p><a href="#">슬라이드2</a></p>
          <p><a href="#">슬라이드3</a></p>
          <p><a href="#">슬라이드4</a></p>
          <p><a href="#">슬라이드5</a></p>
          <p><a href="#">슬라이드6</a></p>
        </div>
      </div>

      <ul class="slides-pagination">
        <li class="on"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
      </ul>

      <div class="slides-navigation">
        <p class="prev"><a href="#">◀</a></p>
        <p class="next"><a href="#">▶</a></p>
      </div>

      <!-- <article>
        <h2>공지 사항</h2>

        <div class="containter">
          <p>
            <span><b>new</b></span>
            <a href="#">1호선 신규 차량이 업데이트 되었습니다.</a>
            <time>2022.02.20</time>
          </p>

          <p>
            <span><b>new</b></span>
            <a href="#">2호선 신규 차량이 업데이트 되었습니다.</a>
            <time>2022.02.17</time>
          </p>

          <p>
            <span><b>new</b></span>
            <a href="#">3호선 신규 차량이 업데이트 되었습니다.</a>
            <time>2022.02.10</time>
          </p>
        </div>

        <ul class="pagination">
          <li>◁</li>
          <li>[1]</li>
          <li>[2]</li>
          <li>[3]</li>
          <li>[4]</li>
          <li>[5]</li>
          <li>▷</li>
        </ul>
      </article> -->
    </section>

    <section id="announcement">
      <h2 class="sr-only">공지사항</h2>
      <article class="apply">
        <div class="board">
          <h3>공지사항</h3>
          <p>
            안녕하세요. 신서울 공작창에 오신 것을 환영합니다. <br>
            클릭하시면 공지사항 내용을 확인하실 수 있습니다.
            </p>
        </div>
  
        <dl>
          <dt>
            <a href="#">1호선 신규 차량이 업데이트 되었습니다.<b>new</b></a>
          </dt>
          <dd>
            <div class="post">
              공지사항 내용입니다.
            </div>
          </dd>
  
          <dt>
            <a href="#">2호선 신규 차량이 업데이트 되었습니다.</a>
          </dt>
          <dd>
            <div class="post">
              공지사항 내용입니다.
            </div>
          </dd>
  
          <dt>
            <a href="#">3호선 신규 차량이 업데이트 되었습니다.</a>
          </dt>
          <dd>
            <div class="post">
              공지사항 내용입니다.
            </div>
          </dd>
  
          <dt>
            <a href="#">4호선 신규 차량이 업데이트 되었습니다.</a>
          </dt>
          <dd>
            <div class="post">
              공지사항 내용입니다.
            </div>
          </dd>
        </dl>
      </article>
    </section>

    <section class="bg_train">
      <h2 class="sr-only">제목</h2>
      <p class="train"><img src="../../../public/assets/images/train.gif" alt="#" /></p>
      <p class="bgi"><img src="../../../public/assets/images/bg.png" alt="#" /></p>

      <p class="train_2"><img src="../../../public/assets/images/train.gif" alt="#" /></p>
      <p class="bgi_2"><img src="../../../public/assets/images/bg_2.png" alt="#" /></p>
    </section>
</template>

<script>


export default {
  setup() {
  
  }
}
</script>

<style>

</style>