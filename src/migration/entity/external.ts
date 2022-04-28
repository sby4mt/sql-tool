import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";

@Entity({ name: "external" })
export class External {
  @PrimaryGeneratedColumn()
  id!: number;

  // タグのid.カンマ区切りの文字列.
  @Column({ type: "text", charset: "utf8" })
  tags!: string;

  @Column({ type: "text", charset: "utf8mb4" })
  problem!: string;

  @Column({ type: "text" })
  answer!: string;

  @Column({ type: "text", charset: "utf8" })
  owner!: string;

  @Column({ type: "text", charset: "utf8mb4" })
  s1!: string;

  @Column({ type: "text", charset: "utf8mb4" })
  s2!: string;

  @Column({ type: "text", charset: "utf8mb4" })
  s3!: string;

  @Column({ type: "text", charset: "utf8mb4" })
  s4!: string;

  @Column({ type: "int"})
  number!: number;

  @Column({ type: "int" })
  correct!: number;

  @Index({ unique: false })
  @Column({ type: "float" })
  correct_rate!: number;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: string;

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: string;

  @Column({ type: "int" })
  report!: number;

  // 0: active(default), -1: inactive オーナーのみ表示編集可能, -2: delete 全ユーザーから非表示
  @Column({ type: "int" })
  active!: number;
}
