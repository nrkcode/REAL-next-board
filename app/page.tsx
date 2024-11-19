"use client";

import { useRouter } from "next/navigation";
import { Button, SearchBar } from "@/components/ui";

function InitPage() {
    const router = useRouter();

    return (
        <div className="page">
            <aside className="page__aside">
                {/* 검색창 ui */}
                <SearchBar placeholder="검색어를 입력하세요."></SearchBar>
                {/* add new page 버튼 ui */}
                <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]">
                    Add New Page
                </Button>
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
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-5 mb-6">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">How to start:</h3>
                        <div className="flex flex-col items-center gap-3">
                            <small className="text-sm font-normal leading-none">1. Create a page</small>
                            <small className="text-sm font-normal leading-none">2. Add boards to page</small>
                        </div>
                    </div>
                    <Button className="text-[#E79057] bg-transparent border border-[#E79057] hover:bg-[#FFF9F5] w-[180px]" onClick={() => router.push("/board/1")}>
                        Add New Page
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default InitPage;
