import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CodeIcon from '@material-ui/icons/Code';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { WHO_AM_I, FOOTER_TITLE, CONTACT_MESSAGE } from '../constants';
import metronomeImg from '../images/metronome.png';
import catanImg from '../images/catan-board-generator.png';
import { Link } from '@material-ui/core';

export default function HomePage() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CodeIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Personal Website
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Personal Projects
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {WHO_AM_I}
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={metronomeImg} title="Metronome" />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Metronome
                                    </Typography>
                                    <Typography>
                                        A simple metronome application built with react, redux, redux-saga and
                                        typescript
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.projectActionsContent}>
                                    <Link className={classes.projectActions} href="metronome">
                                        Open
                                    </Link>
                                    <Link
                                        className={classes.projectActions}
                                        href="https://github.com/derekhdawson/metronome"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Source Code
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={catanImg}
                                    title="Catan Board Generator"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Catan Board Generator
                                    </Typography>
                                    <Typography>
                                        A utility app for Catan players to generate random boards. Written in Swift 4.
                                        Credits to my brother, Andrew, for coding the core algorithm.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.projectActionsContent}>
                                    <Link className={classes.projectActions} href="catan-board-generator">
                                        Open
                                    </Link>
                                    <Link
                                        className={classes.projectActions}
                                        href="https://github.com/derekhdawson/catan-board-generator.git"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Source Code
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    {FOOTER_TITLE}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {CONTACT_MESSAGE}
                </Typography>
            </footer>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    projectActionsContent: {
        paddingLeft: theme.spacing(2),
    },
    projectActions: {
        paddingRight: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
