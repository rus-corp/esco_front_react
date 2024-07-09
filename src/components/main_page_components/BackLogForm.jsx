







export default function BackLogForm() {
  return(
    <section class="main-page-help">
      <div class="main-help-container">
        <div class="main-help image-container">
          <img class="help-image" src="./img/doors/doors6.jpg" alt="" />
        </div>
        <div class="main-help text-container">
          <h2>Нужна помощь с выбором?</h2>
          <p>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</p>
          <div class="form-container">
            <input class="input-field" type="text" placeholder="Как вас зовут?" />
            <input class="input-field" type="text" placeholder="Ваш телефон" />
          </div>
          <button class="form_btn" type="submit">Связаться с нами</button>
          <div class="form__callback">
            <a class="form-callback" href="">Или свяжитесь с нами по телефону <br></br>8-800-222-22-22</a>
          </div>
        </div>
      </div>
    </section>
  );
}