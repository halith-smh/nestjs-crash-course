import { Body, Controller, DefaultValuePipe, Get, NotFoundException, Param, ParseIntPipe, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ApiKeyGuard } from 'src/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('episodes')
export class EpisodesController {
    constructor(private episodesService: EpisodesService) { }

    @Get()
    findAll(
        @Query('sort') sort: 'asc' | 'desc' = 'desc',
        @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number,
    ) {
        return this.episodesService.findAll(sort);
    }

    @Get('featured')
    findFeatured() {
        return this.episodesService.findFeatured();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const episode = this.episodesService.findOne(id);
        if (!episode) {
            throw new NotFoundException(`Episode with ID "${id}" not found`);
        }
        return episode;
    }

    @Post()
    create(@Body(ValidationPipe) input: CreateEpisodeDto) {
        return this.episodesService.create(input);
    }
}
