import {memo, FC} from "react";

// VFCはreact18以降では非推奨でFCに代わった

export const Page404: FC = memo(()=> {
    return <p>404ページです</p>;
});