const mongoose = require('mongoose');


const playersSchema = new mongoose.Schema(
    {
        personalInformation: {
            playerName: {
                type: String,
                required: true
            },
            playerDOB: {
                type: String,
                required: true
            },
            playerAge: {
                type: Number,
                required: true
            },
            playerHomeState: {
                type: String
            },
            playerCategory: {
                type: String,
                enum: ['Batsman', 'Bollor', 'Allrounder', 'WicketKeeper', 'others']
            },
            playerHieght: {
                type: Number
            },
            playerAverage: {
                type: Number,
            },
        },
        TeamInformation: {
            playerNationalTeam: {
                type: String,
                required: true,
                default: null
            },
            playerIPLTeam: {
                type: String,
                default: null
            },
            playerStatusInNationalTeam: {
                type: Boolean,
                default: false
            },
            playerStatusInIPLTeam: {
                type: Boolean,
                default: false
            },
        },
        totalMatch: {
            totalTEST: {
                type: Number
            },
            totalODI: {
                type: Number
            },
            totalT20: {
                type: Number
            },
            totalIPL: {
                type: Number
            },
        },
        totalRUN: {
            totalTESTRUN: {
                type: Number
            },
            totalODIRUN: {
                type: Number
            },
            totalT20RUN: {
                type: Number
            },
            totalIPLRUN: {
                type: Number
            },
        },
        totalWicket: {
            totalTESTWicket: {
                type: Number
            },
            totalODIWicket: {
                type: Number
            },
            totalT20Wicket: {
                type: Number
            },
            totalIPLWicket: {
                type: Number
            },
        },
        total100: {
            totalTEST100: {
                type: Number
            },
            totalODI100: {
                type: Number
            },
            totalT20100: {
                type: Number
            },
            totalIPL100: {
                type: Number
            }
        },
        total50: {
            totalTEST50: {
                type: Number
            },
            totalODI50: {
                type: Number
            },
            totalT2050: {
                type: Number
            },
            totalIPL50: {
                type: Number
            }
        },
        totalSIX: {
            totalTESTSIX: {
                type: Number
            },
            totalODISIX: {
                type: Number
            },
            totalT20SIX: {
                type: Number
            },
            totalIPLSIX: {
                type: Number
            }
        },
        totalFOUR: {
            totalTESTFOUR: {
                type: Number
            },
            totalODIFOUR: {
                type: Number
            },
            totalT20FOUR: {
                type: Number
            },
            totalIPLFOUR: {
                type: Number
            }
        },
        tags: [],
    },
    { timestamps: true });



module.exports = mongoose.model('players', playersSchema)



