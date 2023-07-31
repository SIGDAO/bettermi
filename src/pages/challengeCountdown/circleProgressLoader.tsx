import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TransferToken } from '../../components/transferToken';
import { useSelector } from 'react-redux';
import { accountId } from '../../redux/account';
import { walletNodeHost } from '../../redux/wallet';


interface ICircularWithValueLabelProps {
  time: number;
}

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number, displayNum: number},
) {
  const monNum = Math.floor(props.displayNum );
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" size={92} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          className="x0023-YGwjuf inter-semi-bold-white-18px"
          style={{
            backgroundColor: 'transparent',
            bottom: 'calc(46.92% - 11px)',
            height: '23px',
            letterSpacing: '0.00px',
            lineHeight: '20px',
            position: 'absolute',
            right: 'calc(47.06% - 25px)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: '54px',
            color: 'var(--white)',
            fontFamily: 'var(--font-family-inter)',
            fontSize: 'var(--font-size-xxxl)',
            fontStyle: 'normal',
            fontWeight: '600',
          }}
        >{`00:${monNum.toString().length !== 2? `0${monNum}` : monNum.toString()}`}</Typography>
      </Box>
    </Box>
  );
}

const CircularWithValueLabel: React.FunctionComponent<ICircularWithValueLabelProps> = (props) => {
  const { time } = props;
  const [progress, setProgress] = React.useState(time);
  const navigate = useNavigate();
  const userAccountId = useSelector(accountId);
  const userWalletNodeHost = useSelector(walletNodeHost);

  const handleTransfer = () => {
    TransferToken(userWalletNodeHost,userAccountId)
    navigate('/challengeCompleted')
  }

  React.useEffect(() => {
    let timer: any = null;
    if (progress > 0) {
      timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress - 1));
      }, 1000);
    } else if (progress === 0) {
      handleTransfer()
    }
    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  
  // React.useEffect(() => {
  //   console.log((progress / time) * 100);
  // }, [progress]);
  
  // const progressInPercent = ((time - progress) / time) * 100;
  
  return <CircularProgressWithLabel value={(progress / time) * 100} displayNum={progress}  />;
}

export default CircularWithValueLabel;