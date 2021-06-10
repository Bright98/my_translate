import React from 'react';
import { Header, LeitnerWordCard } from '../../components';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

type Props = RouteComponentProps;

class LeitnerPage extends React.Component<Props> {
    render() {
        return (
            <div className='leitner__layout'>
                <Header
                    title='جعبه لایتنر'
                    action={false}
                    leading={true}
                    leadingClick={() => this.props.history.goBack()}
                />
                <LeitnerWordCard />
            </div>
        )
    }
}

export default withRouter(LeitnerPage);