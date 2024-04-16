import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { CustomerEntity } from "../customer/customer.entity";
import { CategoryEntity } from "../category/category.entity";
import { PurchaseProductEntity } from "../purchase/purchases-products.entity";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
  @Column()
  productName!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchaseProductEntity[];
}