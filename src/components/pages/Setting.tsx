import {memo, FC} from "react";

// VFCはreact18以降では非推奨でFCに代わった

export const Setting: FC = memo(()=> {
    return <p>設定ページです</p>;
});