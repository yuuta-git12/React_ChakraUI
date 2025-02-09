import {memo, FC} from "react";

// VFCはreact18以降では非推奨でFCに代わった

export const Login: FC = memo(()=> {
    return <p>ログインページです</p>;
});