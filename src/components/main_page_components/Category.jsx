import { useState, useEffect } from 'react';
import '../../styles/main_page_components_style/Categories.scss'
import { getCategories } from '../../api/api';




export default function CategoryList() {
  const [activeCategory, setActiveCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((response) => setCategories(response.data)).catch(
      error => console.log('CAtegory error', error)
    );
  }, [])

  function handleActiveCategory(event) {
    setActiveCategory(event.target.innerText)
  }


  return(
    <section className="main-page-catalog">
      <aside className="categories">
        <h1 className="section-title">Витрина товаров</h1>
        <div className="catalog-categories">
          <ul>
            {categories.map(category => (
              <li key={category.id} onClick={handleActiveCategory}
              className={`category-item ${activeCategory === category.name ? 'category_active' : ''}`}>
              <a href=""></a>{category.name}</li>  
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}