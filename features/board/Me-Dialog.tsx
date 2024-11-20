"use client";
import { Button, LabelDatePicker, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Separator } from "@radix-ui/react-separator";
import MarkdownEditor from '@uiw/react-markdown-editor';

interface Props{
    children: React.ReactNode;
}

function MarkdownEditorDialog({ children }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center justify-start gap-2">
                            <Checkbox className="h-5 w-5 min-w-5 mt-[3px]" />
                            <input
                                type="text"
                                placeholder="게시물 제목을 입력하세요."
                                className="w-full text-xl outline-none bg-transparent"
                            />
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        마크다운 에디터를 이용해 TODO-Board를 꾸며보세요.
                    </DialogDescription>
                </DialogHeader>
                {/* 캘린더 */}
                <div className="flex items-center gap-5">
                    <LabelDatePicker label={"From"} />
                    <LabelDatePicker label={"To"} />
                </div>
                <Separator />
                {/* 마크다운에디터ui영역 */}
                <MarkdownEditor className="h-[480px]" />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" variant={"outline"}>
                            취소
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg"
                    >
                        등록
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { MarkdownEditorDialog };