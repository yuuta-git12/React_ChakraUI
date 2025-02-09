import {memo, FC} from "react";

// VFCはreact18以降では非推奨でFCに代わった

export const Home: FC = memo(()=> {
    return <p>HOMEページです</p>;
});