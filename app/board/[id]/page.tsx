"use client";
import Image from "next/image";
import { CardBoard } from "@/features";
import { Button, SearchBar, Progress, LabelDatePicker } from "@/components/ui";
import { ChevronLeft } from "lucide-react";
import styles from "./page.module.scss";

function BoardPage() {
    // const createBoard = () => {};
    return (
        <div className="page">
            <aside className="page__aside">
                {/* 검색창 ui */}
                <SearchBar placeholder="검색어를 입력하세요."></SearchBar>
                {/* add new page 버튼 ui */}
                <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]">Add New Page</Button>
                {/* todo 목록 ui 1개 */}
                <div className="flex flex-col mt-4 gap-1">
                    <small className="text-sm font-medium leading-none text-[#a6a6a6]">
                        고마11의 TODO-board
                    </small>
                    <ul className="flex flex-col">
                        <li className="flex items-center py-2 px-[10px] gap-2 bg-[#f5f5f5]">
                            <div className="h-[6px] w-[6px] bg-green-300 rounded-full"></div>
                            리스트
                        </li>
                        <li className="flex items-center py-2 px-[10px] gap-2 bg-[#f5f5f5]">
                            <div className="h-[6px] w-[6px] bg-green-300 rounded-full"></div>
                            리스트
                        </li>
                    </ul>
                </div>
            </aside>
            <main className="page__main">
            <div className={styles.header}>
                    <div className={styles[`header__btn-box`]}>
                        <Button variant={"outline"} size={"icon"}>
                            <ChevronLeft />
                        </Button>
                        <Button variant={"secondary"}>저장</Button>
                    </div>
                    <div className={styles.header__top}>
                        {/* 제목 입력 Input 섹션 */}
                        <input type="text" placeholder="Enter Title Here!" className={styles.header__top__input} />
                        {/* 진행상황 척도 그래프 섹션 */}
                        <div className="flex items-center justify-start gap-4">
                            <small className="text-sm font-medium leading-none text-[#6D6D6D]">1/10 Completed</small>
                            <Progress className="w-60 h-[10px]" value={33} />
                        </div>
                    </div>
                    {/* 캘린더 + Add New Board 버튼 섹션 */}
                    <div className={styles.header__bottom}>
                        <div className="flex items-center gap-5">
                            <LabelDatePicker label={"From"} />
                            <LabelDatePicker label={"To"} />
                        </div>
                        <Button className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg">Add New Board</Button>
                    </div>
                </div>
                <div className={styles.body}>
                    {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 없을 경우 */}
                    {/* <div className={styles.body__noData}>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">There is no board yet.</h3>
                        <small className="text-sm font-medium leading-none text-[#6D6D6D] mt-3 mb-7">
                            Click the button and start flashing!
                        </small>
                        <button onClick={createBoard}>
                            <Image src="/assets/images/button.svg" width={74} height={74} alt="rounded-button" />
                        </button>
                    </div> */}
                    {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 있을 경우 */}
                    <div className={styles.body__isData}>
                        <CardBoard />
                        <CardBoard />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BoardPage;

//There is no board yet.
//Click the button and start flashing!
