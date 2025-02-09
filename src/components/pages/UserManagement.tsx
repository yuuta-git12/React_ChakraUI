import {memo, FC} from "react";

// VFCはreact18以降では非推奨でFCに代わった

export const UserManegement: FC = memo(()=> {
    return <p>ユーザー管理ページです</p>;
});