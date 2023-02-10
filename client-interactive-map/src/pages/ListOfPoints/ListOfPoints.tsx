import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../components/Map/Map";
import { ICategory } from "../../models/ICategory";
import { IPins } from "../../models/IPins";
import { Category } from "../../models/Category";
import { ListCard } from "./ListCard";

export const ListOfPoints = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    try {
      axios.get(`${URL}/category/api`).then((response) => {
        let categoriesFromAPI = response.data.map((category: Category) => {
          return new Category(category._id, category.category, category.pins);
        });
        setCategories(categoriesFromAPI);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const pins = categories.map((category: ICategory) => {
    return (
      <div key={category._id} className="point-list text-black opacity">
        <ListCard category={category.category} />
        <h3 className="point-list_title">{category.category}</h3>

        <ul>
          {category.pins.map((pin: IPins) => {
            return <li key={pin.lat}>{pin.name}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="list-of-points">
      <section className="p-standard">
        <div className="content-standard">
          <h2 className="list-points_title">Kartpunkter</h2>
          <div className="list-wrap">{pins}</div>
        </div>
      </section>
    </div>
  );
};
