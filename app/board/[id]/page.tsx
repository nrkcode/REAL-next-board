import { Input, Button, SearchBar, Progress } from "@/components/ui";
import styles from "./page.module.scss";

function BoardPage() {
    return (
        <div className="page">
            <aside className="page__aside"></aside>
            <main className="page__main">
                <div className={styles.header}>
                    {/* 제목 입력 Input 섹션 */}
                    <Input placeholder="Enter Title Here!" />
                    {/* 진행상황 척도 그래프 섹션 */}
                    <div className="flex items-center justify-start gap-4">
                        <small className="text-sm font-medium leading-none text-[#6D6D6D]">
                            1/10 Completed
                        </small>
                        <Progress className="w-60 h-[10px]" />
                    </div>
                </div>
                <div>{/* 캘린더 + Add New Board 버튼 섹션 */}</div>
                <div className={styles.body}></div>
            </main>
        </div>
    );
}

export default BoardPage;